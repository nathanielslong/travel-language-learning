class User < ApplicationRecord
  has_one :profile
  has_many :userlangs

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validat

  validates_presence_of :first_name, message: "Name must consist of only letters."

end
