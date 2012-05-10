class UserExtraInfoAdd < ActiveRecord::Migration
  def up
    add_column :users, :gamer_age, :integer
    add_column :users, :age, :integer
    add_column :users, :steam, :string
    add_column :users, :twitter, :string
    add_column :users, :facebook, :string
    add_column :users, :socialize, :boolean
    add_column :users, :tough_game, :string
    add_column :users, :vent, :boolean
    add_column :users, :active_times, :text
    add_column :users, :timezone, :integer
    add_column :users, :silly_answer, :text
    add_column :users, :additional_info, :text

  end

  def down
    remove_column :users, :gamer_age
    remove_column :users, :age
    remove_column :users, :steam
    remove_column :users, :twitter
    remove_column :users, :facebook
    remove_column :users, :socialize
    remove_column :users, :tough_game
    remove_column :users, :vent
    remove_column :users, :active_times
    remove_column :users, :timezone
    remove_column :users, :silly_answer
    remove_column :users, :additional_info
  end
end
