import { TestBed, async, inject } from '@angular/core/testing';
import { PortfoliumnDataService } from './portfoliumn-data-service.service';

describe('PortfoliumnDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [PortfoliumnDataService]
  }));
  it('should...', inject( [PortfoliumnDataService], (service: PortfoliumnDataService) => { // Test service Injection
    expect(service).toBeTruthy();
  }));

  it('should be created', () => {
    const service: PortfoliumnDataService = TestBed.get(PortfoliumnDataService);
    expect(service).toBeTruthy();
  });
  describe('#getProjectData()', () => {
    it('should return an list of project data', inject([PortfoliumnDataService],
    (service: PortfoliumnDataService) => {
      expect(service.getProjectData(1, 2)).toBeTruthy();
    }));
  });
});
