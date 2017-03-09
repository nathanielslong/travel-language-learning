class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.belongs_to :user, index: true
      t.text :bio

      t.timestamps
    end
  end
end
