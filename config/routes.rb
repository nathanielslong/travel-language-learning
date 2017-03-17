Rails.application.routes.draw do
  get 'welcome/about'

  devise_for :users, :controllers => {:registrations => "registrations"}
  get 'learning/index'

  get 'learning', to: 'learning#splash'

  resources :conversations do
    resources :messages
  end

  resources :users, only: [:show]

  root "home#index"
end
