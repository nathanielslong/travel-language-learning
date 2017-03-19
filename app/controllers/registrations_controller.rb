class RegistrationsController < Devise::RegistrationsController

  def after_sign_up_path_for(resource)
    current_user.create_profile()
    current_user
  end

  private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :origin, :destination, :native_language, :birthday, :gender, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :origin, :destination, :native_language, :birthday, :gender, :email, :password, :password_confirmation, :current_password)
  end

end
