Detroit::Application.routes.draw do
  resources :projects
  get '/projects/slug/*path' => 'projects#index'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'home#index'
  root 'home#revamp'
  get '/page2' => 'home#page2'
  get '/cv' => 'home#cv'
  get '/play' => 'home#play'
  get '/revamp' => 'home#revamp'
end
