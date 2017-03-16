class User < ApplicationRecord
  has_one :profile

  has_many :userlangs
  has_many :messages

  has_many :conversations, foreign_key: :sender_id

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  def full_name
    if first_name && last_name
      first_name + " " + last_name
    else
      "Anonymous"
    end
  end

  def conversing_users
    sender_conversations = Conversation.where(sender_id: self.id)
    sender_users = User.find(sender_conversations.map(&:recipient_id))

    recipient_conversations = Conversation.where(recipient_id: self.id)
    recipient_users = User.find(recipient_conversations.map(&:sender_id))

    users = sender_users + recipient_users

  end

  def languages_studying
    user_languages = Userlang.where(user_id: self.id)

    languages = Language.find(user_languages.map(&:language_id))

    [].tap do |studying|
      languages.each do |language|
        studying.push(language.name)
      end
    end
  end

  def self.suggested_users(user)
    user_languages = Userlang.where(user_id: user.id)

    same_userlangs = Userlang.where(language_id: user_languages.map(&:language_id))

    users = User.find(same_userlangs.map(&:user_id) - user.conversing_users.map(&:id))
  end
end
