Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => "registrations"}
  get 'learning/index'

  resources :conversations do
    resources :messages
  end

  root "home#index"
end
