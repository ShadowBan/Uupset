require 'rss'
class HomeController < ApplicationController
  def index

    @guild_cast = Rss.get_feed('guild_cast')
    @wooden = Rss.get_feed('wooden_cast')
    @guild_reddit = Rss.get_feed('guild_reddit')
    @guild_wars_reddit = Rss.get_feed('gw2_reddit')
    @guild_twitter = Rss.get_feed('guild_twitter')
  end

  def slideshow

  end

  def error

  end

  def expire
    Rss.expire_cache
    #redirect '/'
  end
end
