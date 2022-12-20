desc 'create new post. args: title, external_url'
# rake sharelink title="New post title goes here" external_url="url-to-share"
task :sharelink do
  require 'fileutils'
  require 'rubygems'
  require 'slugify'

  title = ENV['title'] || 'New Title'
  external_url = ENV['external_url']

  current_time = Time.new

  filename = "#{current_time.strftime('%Y-%m-%d')}-#{title.slugify}.md"
  dirname = File.join('_posts', current_time.strftime('%Y'), current_time.strftime('%m'))
  FileUtils.mkdir_p(dirname) unless File.directory?(dirname)

  path = File.join(dirname, filename)
  post = <<~"YAML"
    ---
    title: "#{title}"
    date: "#{current_time.strftime('%Y-%m-%dT%H:%M:%S.%LZ')}"
    external_url: "#{external_url}"
    category: ""
    ---
  YAML
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new post generated at #{path}"
  system 'code .'
end

desc 'create new post. args: title'
# rake new_article title="New post title goes here" 
task :new_article do
  require 'fileutils'
  require 'rubygems'
  require 'slugify'

  title = ENV['title'] || 'New Title'

  current_time = Time.new

  filename = "#{current_time.strftime('%Y-%m-%d')}-#{title.slugify}.md"
  dirname = File.join('_posts', current_time.strftime('%Y'), current_time.strftime('%m'))
  FileUtils.mkdir_p(dirname) unless File.directory?(dirname)

  path = File.join(dirname, filename)
  post = <<~"YAML"
    ---
    title: "#{title}"
    date: "#{current_time.strftime('%Y-%m-%dT%H:%M:%S.%LZ')}"
    category: ""
    ---
  YAML
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new post generated at #{path}"
  system 'code .'
end
