class CreateInputs < ActiveRecord::Migration
  def change
    create_table :inputs do |t|
      t.text :content

      t.timestamps
    end
  end
end
