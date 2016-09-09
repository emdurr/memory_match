class HomeController < ApplicationController
  def index
  	@numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].shuffle
  	@numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  	@photos = ['letter-a.png', 'letter-a.png', 'letter-b.png', 'letter-b.png',
  						 'letter-c.png', 'letter-c.png', 'letter-d.png', 'letter-d.png',
  						 'letter-e.png', 'letter-e.png', 'letter-f.png', 'letter-f.png',
  						 'letter-g.png', 'letter-g.png', 'letter-h.png', 'letter-h.png',
  						].shuffle
  end
end
