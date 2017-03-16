Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => "registrations"}
  get 'learning/index'

  resources :conversations do
    resources :messages
  end

  root to: 'home#index'
end
