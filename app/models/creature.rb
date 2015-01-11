class Creature < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true, numericality: false
  validates :desc, presence: true, length: { minimum: 10, maximum: 255 }

end
