class WordpressPostsController < ApplicationController
  require 'wordpress-rails-connection'
  require 'faraday'

  def index
    render :json => WordpressRailsConnection.posts
  end

end