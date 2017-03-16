Rails.application.routes.draw do
  get "learning/index"

  devise_for :users

  resources :conversations do
    resources :messages
  end

  root "home#index"
end
