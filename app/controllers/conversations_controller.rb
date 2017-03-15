class ConversationsController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.suggested_users(current_user)
    @conversations = Conversation.all
  end

  def create
    if Conversation.where(conversation_params)
      .present?
    @conversation = Conversation.where(conversation_params).first
    else
      @conversation = Conversation.create(conversation_params)
    end

    redirect_to conversation_messages_path(@conversation)

  end

  private

  def conversation_params
    params.permit(:sender_id, :recipient_id)
  end

end
