class CreateUserGroups < ActiveRecord::Migration
  def change
    create_table :users_groups, :id => false do |t|
        t.references :group
        t.references :user
    end
    add_index :users_groups, [:group_id, :user_id]
    add_index :users_groups, [:user_id, :group_id]
  end
end
