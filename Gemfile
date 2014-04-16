source 'https://rubygems.org'

gem 'rails', '4.0.3'
gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 1.2'
gem 'httparty'
gem 'sqlite3'



group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :development, :test do
  gem "rspec-rails"
  gem "guard-rspec"
  gem "factory_girl_rails"
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'simplecov', :require => false
end

group :production do
  gem 'rails_12factor'
end

group :development do
  gem 'capistrano'
  gem 'capistrano-rvm'
  gem 'capistrano-bundler'
  gem 'capistrano-rails'
end

gem 'therubyracer', platforms: :ruby

