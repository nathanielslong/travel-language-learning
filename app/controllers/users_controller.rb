class UsersController < ApplicationController
  before_action :authenticate_user!


  def show
    @user = User.find(params[:id])
    @profile = Profile.where(user_id: params[:id]).first
    @same_language = User.suggested_users(@user)[0..4]
    @nearby = @user.nearby_users
  end

  def splash
    @disable_footer = true
  end

  def bio
    @user = User.find(params[:id])
    render 'users/bio.js.erb'
  end

  def newbio
    @user = User.find(params[:id])
    @user.profile.bio = params[:profile][:bio]
    @user.profile.save
    render 'users/newbio.js.erb'
  end

  def picture
  end

end
