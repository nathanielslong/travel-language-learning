Rails.application.routes.draw do
  get 'welcome/about'

  devise_for :users, :controllers => {:registrations => "registrations"}

  get 'learning/index'

  get 'learning', to: 'learning#splash'

  resources :conversations do
    resources :messages
  end

  resources :users, only: [:show]

  put 'users/:id/profile/bio', to: 'users#bio', as: 'edit_user_bio'
  post 'users/:id/profile/bio', to: 'users#newbio', as: 'user_bio'

  post 'users/:id/profile/message', to: 'users#message', as: 'user_message'

  root "home#index"
end
