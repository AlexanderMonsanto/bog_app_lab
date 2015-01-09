class CreaturesController < ApplicationController
  attr_accessor :name, :desc

  def index
    @name = Creature.all
  end

  def new
    @creature = Creature.new
  end

  def create
    @creature = Creature.new(creature_params)
    if @creature.save
    redirect_to '/creatures'
    else
    render :action => "new"
    end
  end

  def creature_params
    params.require(:creature).permit(:name, :desc)
  end

  def show
    @creature = Creature.find(params[:id])
  end


end
