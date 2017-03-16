Rails.application.routes.draw do
<<<<<<< HEAD
  resources :users, :only => [:show]

  devise_for :users

  get 'learning/index'

=======
  get "learning/index"

  devise_for :users

>>>>>>> master
  resources :conversations do
    resources :messages
  end

  root "home#index"
end
