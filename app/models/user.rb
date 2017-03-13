class User < ApplicationRecord
  has_one :profile

  has_many :userlangs
  has_many :messages

  has_many :conversations, foreign_key: :sender_id

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # validates_format_of :first_name, with: /\A[a-zA-Z]+\z/, message: "Name must consist of only letters."
  # validates_format_of :last_name, with: /\A[a-zA-Z]+\z/, message: "Name must consist of only letters."

  # validate :origin_and_destination

  def origin_and_destination
    errors.add(:origin, "Can't be the same as the destination.") if origin == destination
  end

end
