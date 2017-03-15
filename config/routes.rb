Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => "registrations"}
  get 'learning/index'

  devise_for :users

  resources :conversations do
    resources :messages
  end

  root to: 'home#index'
end
