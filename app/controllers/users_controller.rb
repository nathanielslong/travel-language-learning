class UsersController < ApplicationController
  before_action :authenticate_user!


  def show
    @user = User.find(params[:id])
    @profile = Profile.where(user_id: params[:id]).first
    @same_language = User.suggested_users(@user)[0..4]
    @nearby = @user.nearby_users
  end

  def splash

  end

end
