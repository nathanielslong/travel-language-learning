# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# Neither list is exhaustive, just a note.
languages = ["English", "French", "Portuguese", "Vietnamese"]

genders = ["Male", "Female", "Nonbinary", "Agender", "Genderfluid", "Bigender", "Genderqueer", "Two-Spirit"]

15.times do

  rand1 = rand(0..3)

  rand2 = rand(0..7)

  # do i want desired language listed here, or just in userlang?
  User.create(first_name: Faker::Name.first_name,
              last_name: Faker::Name.last_name,
              origin: Faker::Address.city + ", " + Faker::Address.country,
              destination: Faker::Address.city + ", " + Faker::Address.country,
              native_language: languages[rand1],
              birthday: Faker::Date.between(70.years.ago, 20.years.ago),
              gender: genders[rand2],
              email: Faker::Internet.email,
              password: "Password123")
end

users = User.all

users.each do |user|
  user.create_profile(bio: Faker::Lorem.paragraph)
end

languages.each do |language|
  Language.create(name: language)
end

users.each do |user|
  Userlang.create(user_id: user.id, language_id: rand(1..4))
end


3.times do
  rand3 = rand(1..users.count)
  users.each do |user|
    user.conversations.create(recipient_id: rand3)
  end
end

conversations = Conversation.all

conversations.each do |conversation|
  rand4 = rand(1..users.count)
  conversation.messages.create(body: Faker::Lorem.paragraph, user_id: rand4)
end
