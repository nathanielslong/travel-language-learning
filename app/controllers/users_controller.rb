class UsersController < ApplicationController
  before_action :authenticate_user!


  def show
    @user = User.find(params[:id])
    @profile = Profile.where(user_id: params[:id]).first
  end

  def splash
  end

end
