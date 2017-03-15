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

  # validates_format_of :first_name, with: /\A[a-zA-Z]+\z/, message: "Name must consist of only letters."
  # validates_format_of :last_name, with: /\A[a-zA-Z]+\z/, message: "Name must consist of only letters."

  # validate :origin_and_destination_not_the_same

  # def origin_and_destination_not_the_same
  #   if origin == destination
  #     errors.add(:origin, "Can't be the same as the destination.")
  #   end
  # end
  #
  def conversing_users
    conversations = Conversation.where(sender_id: self.id).or(Conversation.where(recipient_id: self.id))
  end

  def languages_studying
    Userlang.where(user_id: self.id).map(&:name)
  end

  def self.suggested_users(user)
    user_languages = Userlang.where(user_id: user.id)

    same_userlangs = Userlang.where(language_id: user_languages.map(&:language_id))

    users = User.find(same_userlangs.map(&:user_id))
  end

end
