class CreateUserlangs < ActiveRecord::Migration[5.0]
  def change
    create_table :userlangs do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :language, foreign_key: true

      t.timestamps
    end
  end
end
