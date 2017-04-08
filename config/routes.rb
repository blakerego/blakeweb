Detroit::Application.routes.draw do

  resources :projects do 
      collection do
      post 'reorder'
    end
  end

  get '/projects/slug/*path' => 'projects#index'
  match '/project_admin', :to => 'projects#admin', :via => 'get'

  root 'home#revamp'
  get '/page2' => 'home#page2'
  get '/cv' => 'home#cv'
  get '/play' => 'home#play'
  get '/revamp' => 'home#revamp'
end
