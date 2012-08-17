require 'nokogiri'
require 'open-uri'

class Rss

  #### Pod Casts ####
  def self.update_guild_cast
    doc = Nokogiri::XML(open("http://www.gamebreaker.tv/video-game-shows/guild-wars-video/guildcast-guild-wars-show/feed/"))
    newest = doc.xpath('//item').first
    data = {}
    data[:title] = newest.xpath('title').text
    data[:link] = newest.xpath('link').text 
    data[:pubdate] = Date.parse(newest.xpath('pubDate').text).to_s rescue nil
    data[:last_update] = (Date.today - Date.parse(newest.xpath('pubDate').text)).to_i rescue nil
    Rails.cache.write('guild_cast', data, {:expires_in => 3600})
    data
  end

  def self.update_wooden_cast
    doc = Nokogiri::XML(open("https://gdata.youtube.com/feeds/base/users/woodenpotatoes/uploads?alt=rss&order_by=published"))
    newest = doc.xpath('//item').first
    data = {}
    data[:title] = newest.xpath('title').text
    data[:link] = newest.xpath('link').text
    data[:image_url] = doc.xpath('//image/url').text
    data[:pubdate] = Date.parse(newest.xpath('pubDate').text).to_s rescue nil
    data[:last_update] = (Date.today - Date.parse(newest.xpath('pubDate').text)).to_i rescue nil
    Rails.cache.write('wooden_cast', data, {:expires_in => 3600})
    data
  end

  #### News Feeds ####
  def self.update_guild_twitter
    doc = Nokogiri::XML(open("http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=_theindustry"))
    items = doc.xpath('//item')
    pfeed = []
    items.each do |item|
      data = {} 
      data[:title] = item.xpath('title').text
      data[:url] = item.xpath('link').text
      pfeed << data
    end
    Rails.cache.write('guild_twitter', pfeed, {:expires_in => 180})
    pfeed
  end

  #### Reddit Feeds ####
  def self.update_guild_reddit
    doc = Nokogiri::XML(open("http://www.reddit.com/r/theindustry.rss"))
    items = doc.xpath('//item')
    pfeed = []
    items.each do |item|
      data = {} 
      data[:title] = item.xpath('title').text
      data[:url] = item.xpath('link').text
      pfeed << data
    end
    Rails.cache.write('guild_reddit', pfeed, {:expires_in => 180})
    pfeed
  end

  def self.update_gw2_reddit
    doc = Nokogiri::XML(open("http://www.reddit.com/r/guildwars2.rss"))
    items = doc.xpath('//item')
    pfeed = []
    items.each do |item|
      data = {} 
      data[:title] = item.xpath('title').text
      data[:url] = item.xpath('link').text
      pfeed << data
    end
    Rails.cache.write('gw2_reddit', pfeed, {:expires_in => 1800})
    pfeed
  end

  def self.get_feed(feed)
    data = Rails.cache.read(feed)
    data = send("update_#{feed}") if data.nil?
    data
  end

  def self.expire_cache
    Rails.cache.clear
  end
end