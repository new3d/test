class ApplicationController < ActionController::Base
  protect_from_forgery

  Refinery::Core.configure do |config|
	config.site_name = "New3D"
  end
end
