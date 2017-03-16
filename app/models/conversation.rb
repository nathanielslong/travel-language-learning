class Conversation < ApplicationRecord
  belongs_to :sender, foreign_key: :sender_id, class_name: 'User'
  belongs_to :recipient, foreign_key: :recipient_id, class_name: 'User'

  has_many :messages, dependent: :destroy

  def find_recipient(user)
    if self.sender_id == user.id
      recipient = User.find(self.recipient_id).full_name
    else
      recipient = User.find(self.sender_id).full_name
    end
  end
end
