Rails.application.routes.draw do
  devise_for :users

  get '/about_us' => 'about_us#index'
  
  resources :conversations do
    resources :messages
  end
end
