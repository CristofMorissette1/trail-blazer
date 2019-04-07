class CreateDonations < ActiveRecord::Migration[5.1]
  def change
    create_table :donations do |t|
      t.integer :amount
      t.references :trail_solutions, index: true, foreign_key: true
      t.timestamps
    end
  end
end
