# unicorn_rails -c config/unicorn.rb -E production -D
app_path = '/var/web/industry'
current_path = '/var/web/industry/current'
shared_path = '/var/web/industry/shared'

rails_env = ENV['RAILS_ENV'] || 'production'

worker_processes 4

preload_app true

timeout 30

listen "#{shared_path}/tmp/sockets/industry.sock", :backlog => 64
pid "#{shared_path}/tmp/pids/unicorn.industry.pid"

# Production specific settings
if rails_env == "production"
  # Help ensure your application will always spawn in the symlinked
  # "current" directory that Capistrano sets up.
  working_directory current_path

  # feel free to point this anywhere accessible on the filesystem
  user 'chris'
  stderr_path "#{current_path}/log/unicorn.stderr.log"
  stdout_path "#{current_path}/log/unicorn.stdout.log"
end

before_fork do |server, worker|
  # the following is highly recomended for Rails + "preload_app true"
  # as there's no need for the master process to hold a connection
  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.connection.disconnect!
  end

  # Before forking, kill the master process that belongs to the .oldbin PID.
  # This enables 0 downtime deploys.
  old_pid = "#{shared_path}/tmp/pids/unicorn.industry.pid.oldbin"
  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
      # someone else did our job for us
    end
  end
end

after_fork do |server, worker|
  # the following is *required* for Rails + "preload_app true",
  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.establish_connection
  end

  # if preload_app is true, then you may also want to check and
  # restart any other shared sockets/descriptors such as Memcached,
  # and Redis.  TokyoCabinet file handles are safe to reuse
  # between any number of forked children (assuming your kernel
  # correctly implements pread()/pwrite() system calls)
end
