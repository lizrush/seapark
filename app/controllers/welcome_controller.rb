class WelcomeController < ApplicationController
  def about
    render partial: 'about'
  end
end
