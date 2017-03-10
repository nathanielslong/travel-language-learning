class User < ApplicationRecord
  has_one :profile
  has_many :userlangs

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :first_name
  validates_presence_of :last_name
  validates_presence_of :origin
  validates_presence_of :destination
  validates_presence_of :native_language
  validates_presence_of :birthday
  validates_presence_of :gender

end
