Rails.application.routes.draw do
  resources :users, :only => [:show]

  devise_for :users

  get 'learning/index'

  resources :conversations do
    resources :messages
  end

  root to: 'home#index'
end
