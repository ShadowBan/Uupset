class Users::RegistrationsController < Devise::RegistrationsController
  def new
    unless params[:allow] == "1337"
      redirect_to root_url
    else
      super
    end
  end
end