class User < ApplicationRecord
  has_one :profile
  has_many :userlangs
  has_many :conversations, :foreign_key => :sender_id

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_format_of :first_name, with: /\A[a-zA-Z]+\z/, message: "Name must consist of only letters."
  validates_format_of :last_name, with: /\A[a-zA-Z]+\z/, message: "Name must consist of only letters."

end
