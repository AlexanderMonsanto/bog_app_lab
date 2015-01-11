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

  def show
    @creature = Creature.find(params[:id])

    @search = @creature.name
    list = flickr.photos.search :text => @search, :sort => 'relevance'

    @results = list.map do |photo|
    [FlickRaw.url_s(photo),
    FlickRaw.url_b(photo)]
    end
  end

  def edit
    @creature = Creature.find(params[:id])
  end

  def update
    @creature = Creature.find(params[:id])
    @creature.update_attributes(creature_params)

    redirect_to "/creatures/#{params[:id]}"
  end

  def destroy
    @creature = Creature.find(params[:id]).destroy
    redirect_to "/creatures"
  end

  private

  def creature_params
    params.require(:creature).permit(:name, :desc)
  end

end
