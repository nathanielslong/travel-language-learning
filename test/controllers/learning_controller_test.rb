require 'test_helper'

class LearningControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get learning_index_url
    assert_response :success
  end

end
