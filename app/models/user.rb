class User < ApplicationRecord
  has_one :profile
  has_many :userlangs

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :secure_validatable
end
