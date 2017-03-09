Rails.application.routes.draw do
  get 'users/show'

  devise_for :users

  get "/users/:id", to: "users#show"
end
