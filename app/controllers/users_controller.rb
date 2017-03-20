class UsersController < ApplicationController
  before_action :authenticate_user!


  def show
    @conversation = Conversation.new(sender_id: current_user.id, recipient_id: params[:id])
    @message = @conversation.messages.new(user_id: @conversation.sender_id)
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

  def message
    # @conversation = Conversation.new(sender_id: current_user.id, recipient_id: params[:id]).save
    # @message = @conversation.messages.new(user_id: @conversation.sender_id, body: params[:message][:body]).save
    render 'users/message.js.erb'
  end

end
