Detroit::Application.routes.draw do
  resources :projects

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'home#index'
  root 'home#revamp'
  get '/page2' => 'home#page2'
  get '/cv' => 'home#cv'
  get '/play' => 'home#play'
  get '/revamp' => 'home#revamp'

  get '/wordpress/posts' => 'wordpress_posts#index'

end
