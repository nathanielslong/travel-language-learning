class CreateUserlangs < ActiveRecord::Migration[5.0]
  def change
    create_table :userlangs do |t|

      t.timestamps
    end
  end
end
