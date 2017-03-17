class UsersController < ApplicationController
	  before_action :authenticate_user!


  def show
  	@user = User.find(params[:id])
  end

  def splash
	  @disable_footer = true

  end

end
