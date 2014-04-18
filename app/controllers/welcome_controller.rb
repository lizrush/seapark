class WelcomeController < ApplicationController
  def about
    render partial: 'about'
  end

  def help
    render partial: 'help'
  end
end
