Seapark::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'
  get '/seattle' => 'welcome#map'
  get '/about' => 'welcome#about'
  get '/help' => 'welcome#help'
  get '/how-it-works' => 'welcome#how-it-works'

end
