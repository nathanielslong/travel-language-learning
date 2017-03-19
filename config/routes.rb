Rails.application.routes.draw do
  get 'welcome/about'

  devise_for :users, :controllers => {:registrations => "registrations"}

  get 'learning/index'

  get 'learning', to: 'learning#splash'

  resources :conversations do
    resources :messages
  end

  resources :users, only: [:show]

  get 'users/:id/profile/bio', to: 'users#bio', as: 'edit_user_bio'
  get 'users/:id/profile/picture', to: 'users#picture', as: 'edit_user_picture'

  root "home#index"
end
