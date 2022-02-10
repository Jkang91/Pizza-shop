Rails.application.routes.draw do
  root 'pages#index'

  resources :pizzas
  resources :reviews, only: [:create, :destroy]
  
  get '/contactus', to: 'contactus#index'
  get '/aboutus', to: 'aboutus#index'

  get '*path', to: 'pages#index', via: :all
end
